import PostModelo from "componentes/PostModelo";
import styles from './SobreMim.module.css'

import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function SobreMim(){
    return(
            <PostModelo
                fotoCapa={fotoCapa}
                titulo='Sobre mim' >
                    <h3 className={styles.subtitulo}>
                        Olá, eu sou o Usuário
                    </h3>
                    <img
                        src={fotoSobreMim}
                        alt='Foto do Usuário'
                        className={styles.fotoSobreMim}
                    />
                    <p className={styles.paragrafo}>
                        Texto resumindo sobre as experiências do usuário
                    </p>
            </PostModelo>
    )
}