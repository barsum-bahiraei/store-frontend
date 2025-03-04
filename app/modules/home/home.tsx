import type {Route} from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "test"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function Home() {
    return <div>
        <h1>this is test</h1>
    </div>;
}
