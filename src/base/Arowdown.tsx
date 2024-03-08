
interface IProps {
    size?: string;
}

export const Arrowdown = ({size}: IProps) => {
    return <i className="fa fa-angle-down" style={{ fontSize: size }} ></i>
}