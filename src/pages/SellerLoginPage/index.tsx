import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './index.css';

const SellerLoginPage: React.FC = () => {
    return (
        <IonPage>

            <IonHeader>

                <IonToolbar>

                    <IonTitle>Seller Login</IonTitle>

                    <IonButtons slot="end">
                        <IonBackButton></IonBackButton>
                    </IonButtons>

                </IonToolbar>

            </IonHeader>

            <IonContent fullscreen>

            </IonContent>

        </IonPage>
    );
};

export default SellerLoginPage;
