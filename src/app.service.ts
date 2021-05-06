import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) { }

  getRepos(language = `C#`): any {
    const repos = this.httpService.get(
      `https://api.github.com/users/takenet/repos`,
    );
    return {
      repos: repos.toPromise().then((res) =>
        res.data
          ?.map((repo) => ({
            description: repo.description,
            full_name: repo.full_name,
            language: repo.language,
            created_at: repo.created_at,
          }))
          .filter((repo) => repo.language === language)
          .sort((repoA, repoB) =>
            repoA.created_at <= repoB.created_at ? -1 : 1,
          ))
    }
  }
