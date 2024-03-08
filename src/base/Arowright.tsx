
interface IProps {
    size?: string;
}

export const Arrowright = ({size}: IProps) => {
    return <i className="fa fa-angle-right" style={{ fontSize: size }} ></i>
}
