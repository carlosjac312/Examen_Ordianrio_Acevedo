import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class="layout">
      <header class={"header"}>
        <a href={"/"} class={"fuente"}>Todos </a>
        <a class={"fuente"} href={"/favorites"}> Favoritos</a>
      </header>
      <Component />
    </div>
  );
}
