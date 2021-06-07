import styles from './Navbar.module.scss';
import Link from '../Link';
import Image from 'next/image'


export default function Navbar() {
    return (
        <div className={styles.container}>
            <header>
                <div>
                    <Image src="/logo-pokemon.svg" alt="Logo Pokemons" width={260} height={180} />
                </div>

                <div>
                    <Link href="/">
                        Home
                    </Link>

                    <Link href="/about">
                        About
                    </Link>
                </div>
            </header>
        </div>
    );
}