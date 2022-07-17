import React, {FC} from "react";

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
    return (<div className={'list-event-card'}>
        <div className={'banner'}>
        </div>
        <div className={'list-event-card-content'}>
            <div className={'fields'}>
                <EventFieldSmall text={'event name'}></EventFieldSmall>
                <EventFieldSmall text={'event description'}></EventFieldSmall>
                <EventFieldSmall text={'event date'}></EventFieldSmall>
            </div>
        </div>
    </div>);
}


export const MintEventPage = () => {
    return (
        <div>
        <Header></Header>
            <div style={{display: 'flex', alignItems: "center", flexDirection:'column', alignContent: "center"}}>
                <EventCard title={'Solana HH'}
                   description={'not a hackathon, just a good event'}
                   datetime={'09/12/1232'}
                   participantsLimit={123}
                   bannerLink={'img.png'}
                ></EventCard>
            </div>
        </div>
    )
}

export default MintEventPage