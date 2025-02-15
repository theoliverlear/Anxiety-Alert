import {TargetType} from "../models/html/TargetType";
import {TextElementLink} from "../models/link/TextElementLink";
import {TagType} from "../models/html/TagType";

export const navBarHomeElementLink = new TextElementLink('/',
    TargetType.SELF,
    false,
    'Home',
    TagType.H5);