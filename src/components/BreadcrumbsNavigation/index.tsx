import { Breadcrumbs } from "@mui/material";
import Label from "components/Label";
import { useLocation } from "react-router-dom";
import useStyles from './styles'
import LinkRoute from "components/LinkRoute";

const BreadcrumbsNavigation = () => {

    const styles = useStyles()

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const breadcrumbNameMap: { [key: string]: string } = {
        '/accredited': 'Credenciado CASSI',
        '/want-to-be-accredited': 'Quero ser um credenciado',
        '/new-accreditation': 'Nova solicitação',
    };

    return (
        <Breadcrumbs separator=">" aria-label="breadcrumb" sx={styles}>
            <LinkRoute to="/accredited">Credenciado CASSI</LinkRoute>
            <LinkRoute to="/want-to-be-accredited">Quero ser um credenciado</LinkRoute>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                return index === pathnames.length - 1 ? (
                    <Label fontSize={12} color="text.primary" key={to}>
                        {breadcrumbNameMap[to]}
                    </Label>
                ) : (
                    <LinkRoute key={to} to={to}>
                        {breadcrumbNameMap[to]}
                    </LinkRoute>
                );
            })}
        </Breadcrumbs>
    );
}

export default BreadcrumbsNavigation;
