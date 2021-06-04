import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  // connecting pokeAPI
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokedex/2/")
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
    })
    // get response in object JSON
    .then((RespostaEmObjeto) => {
      return RespostaEmObjeto.pokemon_entries;
    });

  return {
    props: {
      pokemons,
    }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  const { pokemons } = props;


  return (
    <div className={styles.container}>
      <Head>
        <title>App PokeDev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </header>

      <main className={styles.main}>

        <h1>Lista de Pokemons</h1>

        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.entry_number}>
              <Link href={`/pokemon/${pokemon.entry_number}`}>
                <a>
                  {pokemon.pokemon_species.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' Thiago Henrique Fragata '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
