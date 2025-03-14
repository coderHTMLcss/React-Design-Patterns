import DangerousButton from "../components/DangerousButton";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export const ButtonFactory = (type: string, label: string) => {
    switch (type) {
        case 'primary': {
            return <PrimaryButton label={label} />
        }
        case 'secondary': {
            return <SecondaryButton label={label} />
        }
        case 'danger': {
            return <DangerousButton label={label} />
        }
        default:
            return <button>{label}</button>;
    };
};