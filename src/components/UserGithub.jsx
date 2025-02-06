import { useState, useEffect } from "react";
import "../index.css";
function UserGithub() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/github-john-doe`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data.name);
      })
      .catch(console.error);
  }, []);

  if (data) {
    return (
      <>
        <div className="userGitBox">
          <h1> Github Users</h1>
          <h2>{data.name}</h2>
          <img
            className="imgGitUser"
            src={data.avatar_url}
            alt="un lapin bleu"
          />
          <p>{data.bio}</p>
          <p>Abonnés: {data.followers}</p>
          <p>Abonnements: {data.following}</p>
          <p>Créé le : {data.created_at}</p>
          <p>Modifié le : {data.updated_at}</p>
          <p>
            URL repositories :
            <a
              className="linkGit"
              href="https://api.github.com/users/github-john-doe/repos"
            >
              {data.repos_url}
            </a>
          </p>
        </div>
      </>
    );
  }
}

export default UserGithub;