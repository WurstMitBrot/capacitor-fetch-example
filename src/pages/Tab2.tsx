import {
  IonButton,
  IonContent,
  IonHeader,
  IonLabel,
  IonLoading,
  IonPage,
  IonSpinner,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";
import {
  useCreateUserMutation,
  useGetUserQuery,
} from "../features/userApiSlice";

const Tab2: React.FC = () => {
  const { data, isLoading, isError, refetch } = useGetUserQuery();
  const [createUser, { isLoading: creatingUser }] = useCreateUserMutation();

  const onCreateUser = async () => {
    try {
      // THIS CRASHES WITH --> [Error] Failed to create user: – {status: "FETCH_ERROR", error: "TypeError: Input body is locked."}
      await createUser({
        name: "John Doe",
        email: "john.doe@example.com",
        number: "1234567890",
      }).unwrap();
    } catch (err) {
      console.error("Failed to create user:", err);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLoading isOpen={creatingUser} />
        <IonButton expand="full" onClick={onCreateUser}>
          Create user rtk query
        </IonButton>
        <IonButton expand="full" onClick={refetch}>
          Refetch users
        </IonButton>
        {isLoading && <IonSpinner />}
        {isError && <IonText color="danger">Error</IonText>}
        {!isLoading &&
          !isError &&
          data?.map((user) => (
            <IonLabel key={user.id}>
              <p>{user.name}</p>
            </IonLabel>
          ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
