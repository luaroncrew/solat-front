import React, {FC} from "react";
import {Footer, Navbar} from "./index";


function Header() {
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

type eventFieldProps = {
    text: string,
    size?: string
}

export const EventFieldBig = (
    {text}: eventFieldProps) => {
    return (<div className={'event-field-big'}>
        {text}
    </div>)
}

export const EventFieldSmall = (
    {text}: eventFieldProps) => {
    return (<div className={'event-field-small'}>
        {text}
    </div>)
}


type eventCardProps = {
    title: string,
    description: string,
    datetime: string,
    participantsLimit : number,
    bannerLink: string
}

export const EventCard = (
    {title, description, datetime, participantsLimit, bannerLink}: eventCardProps) => {
    return (<div className={'event-card'}>
        <div className={'banner'}>
            <img src={bannerLink} alt={'error'}/>
        </div>
        <div className={'event-card-content'}>
            <div className={'fields'}>
                <EventFieldSmall text={title}></EventFieldSmall>
                <EventFieldSmall text={datetime}></EventFieldSmall>
                <EventFieldSmall text={participantsLimit.toString()}></EventFieldSmall>
                <EventFieldBig text={description}></EventFieldBig>
            </div>
        </div>
    </div>);
}


export const MintEventPage = () => {
    return (
        <div>
        <Navbar></Navbar>
            <div style={{display: 'flex', alignItems: "center", flexDirection:'column', alignContent: "center"}}>
                <EventCard title={'Solana HH'}
                   description={'not a hackathon, just a good event'}
                   datetime={'09/12/1232'}
                   participantsLimit={123}
                   bannerLink={'hhbanfner.png'}
                ></EventCard>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MintEventPage