import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRoute, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar,  } from "@ionic/react"
import { homeOutline, logOutOutline } from "ionicons/icons"
import { Redirect, Route } from "react-router"
import Home from "./Home"

const Menu: React.FC = () => {
    const path = [
        {name: 'Home', url:'/app/home', icon:homeOutline}

    ];
    return (
        <IonPage>
            <IonSplitPane contentId="main">
            <IonMenu contentId="main">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>

                    {path.map((item, index) => (
                        <IonMenuToggle key={index}>
                            <IonItem routerLink={item.url} routerDirection="forward">
                                <IonIcon icon={item.icon}
                                    slot="start"></IonIcon>
                                    {item.name}
                            </IonItem>
                        </IonMenuToggle>
                    ))}
                    <IonButton routerLink="/" routerDirection="back" expand ="full">
                        <IonIcon icon={logOutOutline} slot="start"></IonIcon>
                        Logout
                    </IonButton>
                </IonContent>
                </IonMenu>
                <IonRouterOutlet id="main">
                    <Route exact path="/app/home" component={Home}> </Route>
                    <Route exact path="/app">
                    <Redirect to="/app/home" /> 
                    </Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>

    );
};

export default Menu;