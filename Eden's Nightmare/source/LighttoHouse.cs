using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
public class LighttoHouse : MonoBehaviour {

    // Use this for initialization
    private bool collide;
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
        if (collide == true)
        {
            SceneManager.LoadScene("Home", LoadSceneMode.Single);
        }
    }

    void OnCollisionEnter2D(Collision2D col)
    {
        Debug.Log("OnCollisionEnter2D");
        if (col.gameObject.CompareTag("Player"))
        {
            collide = true;
        }

    }
    void OnCollisionExit2D(Collision2D col)
    {
        Debug.Log("OnCollisionEXIT2D");
        if (col.gameObject.CompareTag("Player"))
        {

            collide = false;
        }
    }
}
