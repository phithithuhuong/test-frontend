
interface IProps {
    size?: string;
    color?: string
}

export const Check = ({ size, color }: IProps) => {
    return <i className="fa fa-check" style={{ fontSize: size, color: color, fontWeight: 400 }} ></i>
}
