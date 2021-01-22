import firebase from 'firebase';

export default class FirebaseAuth {
    public signIn(email: string, password: string): Promise<any>{
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }


}