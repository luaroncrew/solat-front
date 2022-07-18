import React, {FC} from "react";
import {Footer, Navbar} from "./index";
import Image from "next/image";
import {text} from "stream/consumers";

type eventButtonProps = {
    text: string,
}

type eventFieldProps = {
    text: string,
    size?: string
}

export const EventButton = ({text}: eventButtonProps) => {
    return (
        <button className={'event-button'}>
            {text}
        </button>
    )
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
    bannerLink: string,
    actionName: string
}

export const EventCard = (
    {title, description, datetime, participantsLimit, bannerLink, actionName}: eventCardProps) => {
    return (<div className={'event-card'}>
        <div className={'banner'}>
            <Image src={bannerLink} alt={'error'} layout={"responsive"} height={150} width={350}/>
        </div>
        <div className={'event-card-content'}>
            <div className={'fields'}>
                <EventFieldSmall text={title}></EventFieldSmall>
                <EventFieldSmall text={datetime}></EventFieldSmall>
                <EventFieldSmall text={participantsLimit.toString()}></EventFieldSmall>
                <EventFieldBig text={description}></EventFieldBig>
                <EventButton text={actionName}></EventButton>
            </div>
        </div>
    </div>);
}


export const MintEventPage = () => {
    return (
        <div className="bg-gradient-to-r from-purple-500 via-purple-500 to-blue-500">
        <Navbar></Navbar>
            <div style={{display: 'flex', alignItems: "center", flexDirection:'column', alignContent: "center"}}>
                <EventCard title={'Solana HH'}
                   description={'not a hackathon, just a good event'}
                   datetime={'09/12/1232'}
                   participantsLimit={123}
                   bannerLink={'/hhbanner.png'}
                           actionName={'mint an nft'}
                ></EventCard>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MintEventPage