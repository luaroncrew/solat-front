import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function EventCard() {
    return <div className={'header'}>
        <div className={'logo'}>
            SOLAT
        </div>
        <div>
            <button className={'connect-button'}>
                CONNECT
            </button>
        </div>
    </div>
}