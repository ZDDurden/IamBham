//
//  ViewController.swift
//  MyApp
//
//  Created by Bear Cahill on 3/27/18.
//  Copyright © 2018 Bear Cahill. All rights reserved.
//

import UIKit
import Firebase
import FirebaseAuthUI
import FirebaseGoogleAuthUI

class ViewController: UIViewController, FUIAuthDelegate {
    @IBOutlet weak var tfEmail: UITextField!
    
    @IBOutlet weak var tfPassword: UITextField!
    
    @IBOutlet weak var btnCreate: UIButton!
    
    @IBOutlet weak var btnLogin: UIButton!
    
    var authUI : FUIAuth?
    var ref : DatabaseReference?
    var fstore : Firestore!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        authUI = FUIAuth.defaultAuthUI()
        authUI?.delegate = self
        let providers : [FUIAuthProvider] = [FUIGoogleAuth()]
        authUI?.providers = providers
        
        ref = Database.database().reference()
        fstore = Firestore.firestore()
        
        if Auth.auth().currentUser != nil {

            fstore.collection("winner").getDocuments(completion: { (snapshot, error) in
                for doc in (snapshot?.documents)! {
                    doc.reference.delete()
                }
            })
            
//            let doc = fstore.collection("winner").document("100")
//            doc.delete()
//            doc.updateData(["scores":FieldValue.delete()])
//            doc.updateData(["scores.top":700])
//            doc.updateData(["scores":["top":500,"low":5]])
//            doc.updateData(["level":200])
//            doc.setData(["game":1, "user":"brainofbear"], options: SetOptions.merge())
            
//            fstore.collection("winner").whereField("game", isEqualTo: 2).getDocuments(completion: { (snapshot, error) in
//                for doc in (snapshot?.documents)! {
//                    print (doc.data())
//                }
//            })
            
//            let doc = fstore.collection("winner").document("100")
//            doc.getDocument(completion: { (snapshot, error) in
//                if let d = snapshot?.data() {
//                    print (d["user"])
//                }
//            })
            
//            ref?.child("games").child("1").setValue(["name":"first-edited","level":55])
//            ref?.child("games/1/score").setValue(nil)
//            ref?.child("games/1/score").removeValue()
//            ref?.child("games").childByAutoId().setValue(["name":"second","score":20])
            
//            ref?.child("games").observeSingleEvent(of: .value, with: { (snapshot) in
//                if let val = snapshot.value as? [String:Any] {
//                    print (val)
//                }
//            })
            
//            ref?.child("games/1/name").observe(.value, with: { (snapshot) in
//                if let val = snapshot.value as? String {
//                    print (val)
//                }
//            })
            
//            ref?.child("games").child("1").child("name").setValue("new name")
//            ref?.child("games/1/name").setValue("another new name")
//            ref?.child("games/1").setValue(["name":"final name","score":100])
//
//            let childUpdates = ["games/1/name":"child update name","games/2/name":"game 2","games/1/score":nil] as [String:Any]
//            ref?.updateChildValues(childUpdates)
            
            ref?.child("games/1").runTransactionBlock({ (data) -> TransactionResult in
                if var game = data.value as? [String:Any] {
                    game["name"] = "transaction name"
                    game["updatedAt"] = "\(Date())"
                    data.value = game
                }
                return TransactionResult.success(withValue: data)
            }, andCompletionBlock: { (error, success, snapshot) in
                print (success)
            })
        }
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        ref?.child("games/1/name").removeAllObservers()
    }
    
    func authUI(_ authUI: FUIAuth, didSignInWith authDataResult: AuthDataResult?, error: Error?) {
        if error == nil {
            btnLogin.setTitle("Logout", for: .normal)
        }
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func doBtnCreate(_ sender: Any) {
//        fstore.collection("winner").document("100").setData(["game":"1","user":"brainofbear"])
//        fstore.collection("winner").addDocument(data: ["game":2,"user":"brainofbear"])
        let doc = fstore.collection("winner").document()
        doc.setData(["game":"3","user":"brainofbear"])
        
//        ref?.child("games/1/image").observeSingleEvent(of: .value, with: { (snapshot) in
//            if let val = snapshot.value as? String {
//                let fileref = Storage.storage().reference().child(val)
//                fileref.delete(completion: { (error) in
//                    print (error?.localizedDescription)
//                })
//                fileref.downloadURL(completion: { (url, error) in
//                    if let str = url?.absoluteString {
//                        print (str)
//                    }
//                })
                
//                fileref.getData(maxSize: 10000000, completion: { (data, error) in
//                    let iv = UIImageView.init(frame: self.view.bounds)
//                    iv.image = UIImage.init(data: data!)
//                    DispatchQueue.main.async {
//                        self.view.addSubview(iv)
//                    }
//                })
//            }
//        })
        
//        let gameKey = ref?.child("games/2").key
//        let filename = "\(gameKey!).png"
//        let fileref = Storage.storage().reference().child(filename)
//        let meta = StorageMetadata()
//        meta.contentType = "image/png"
//        fileref.putFile(from: Bundle.main.url(forResource: "Guitar", withExtension: "jpg")!, metadata: meta) { (meta, error) in
//                if error == nil {
//                    self.ref?.child("games/2/image").setValue(filename)
//                }
//        }
        
//        if let img = UIImage.init(named: "Guitar.jpg") {
//            fileref.putData(UIImagePNGRepresentation(img)!, metadata: meta, completion: { (meta, error) in
//                if error == nil {
//                    self.ref?.child("games/1/image").setValue(filename)
//                }
//            })
//        }
        
//        ref?.child("games/1/name").setValue("name + \(Date())")
        
//        if let email = tfEmail.text, let password = tfPassword.text {
//            Auth.auth().createUser(withEmail: email, password: password, completion: { (user, error) in
//                print (user?.email ?? "no email")
//                print (Auth.auth().currentUser?.uid ?? "no userid")
//            })
//        }
    }
    
    @IBAction func doBtnLogin(_ sender: Any) {
        if Auth.auth().currentUser == nil {
            if let authVC = authUI?.authViewController() {
                present(authVC, animated: true, completion: nil)
            }
//            if let email = tfEmail.text, let password = tfPassword.text {
//                Auth.auth().signIn(withEmail: email, password: password, completion: { (user, error) in
//                    if error == nil {
//                        self.btnLogin.setTitle("Logout", for: .normal)
//                    }
//                })
//            }
        }
        else {
            do {
                try Auth.auth().signOut()
                self.btnLogin.setTitle("Login", for: .normal)
            }
            catch {}
        }
    }
}

