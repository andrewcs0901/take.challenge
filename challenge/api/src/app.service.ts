import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) { }

  async getRepos(language = `C#`): Promise<any> {
    const repos = this.httpService.get(
      `https://api.github.com/users/takenet/repos`,
    );
    const response = {
        ...(await repos.toPromise().then((res) =>
          res.data
            ?.filter((repo) => repo.language === language)
            .map((repo) => ({
              description: repo.description,
              full_name: repo.full_name,
              language: repo.language,
              created_at: repo.created_at,
            }))
            .sort((repoA, repoB) =>
              repoA.created_at <= repoB.created_at ? -1 : 1,
            ),
        )),
    };
    return response;
  }
}
