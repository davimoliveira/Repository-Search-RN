import { Container } from "../../styles";
import { WebView } from 'react-native-webview';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const RepoPage = ({route}) =>{

    const navigation = useNavigation();
    const repos = useSelector((state) => state.repos.repos);

    useEffect(()=>{
        navigation.setOptions({
            title: repos[route.params.index].name
        })
    },[repos])


    return(
        <Container>
            <WebView
                source={{ uri:repos[route.params.index].html_url  }}
            />
        </Container>
    )
}