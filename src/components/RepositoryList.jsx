import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useEffect, useState } from "react";

const repository = {
    name: 'unform',
    description: 'forms in react',
    link: 'https://github.com/unform/unform',
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);
    console.log(repositories);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data));
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => (
                    <RepositoryItem key={repository.name} repository={repository} />
                ))}
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}