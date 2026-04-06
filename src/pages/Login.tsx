import { IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from "@ionic/react"
import Home from "./Home";
const Login: React.FC = () => {
    const navigation = useIonRouter();

    const doLogin = () => {
        navigation.push("/app", "forward", "replace");
    }
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>Login</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonButton expand= "full" onClick={() => doLogin()}>
            Login
            </IonButton>
        </IonContent>
    </IonPage>
    );   

};

export default Login;