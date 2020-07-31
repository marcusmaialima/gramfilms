import React from "react";
import { WrapperThumb, Thumb, Avatar } from "./style";

type ThumbFieldProps = {
    src: string,
    alt: string,
    avatar: string,
    altAvatar: string
}

function ThumbField({ src, alt, avatar, altAvatar }: ThumbFieldProps) {
    return(
        <WrapperThumb>
            <Thumb src={src} alt={alt} />
            <Avatar src={avatar} alt={altAvatar} />
        </WrapperThumb>
    );
}

export default ThumbField;