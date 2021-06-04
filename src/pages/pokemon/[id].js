import React from 'react';
import Link from 'next/link';

export default function Pokemon({ pokemon }) {
    return (
        <div>
            <img src={pokemon.sprites.front_default} alt="Imagem do Pokemon" />

            <Link href="/">
                <a>Voltar a pagina anterior</a>
            </Link>
        </div>
    );
}


export async function getStaticProps({ params }) {
    // connecting pokeAPI
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        .then((respostaDoServer) => {
            if (respostaDoServer.ok) {
                return respostaDoServer.json();
            }

            throw new Error("Deu problema!")
        })
        // get response in object JSON
        .then((RespostaEmObjeto) => {
            return RespostaEmObjeto;
        });

    return {
        props: {
            pokemon,
        }, // will be passed to the page component as props
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: '1',
                },
            },
            {
                params: {
                    id: '2',
                },
            },
            {
                params: {
                    id: '3',
                },
            },
            {
                params: {
                    id: '4',
                },
            },
        ],
        fallback: false
    };
}
