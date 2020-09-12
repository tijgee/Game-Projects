using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MonsterMoove : MonoBehaviour
{

    // Use this for initialization
    private bool collide;
    [SerializeField]
    Transform target;
    public float enemyspeed = 1.5f;
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        //transform.LookAt(target.position);
        //transform.Rotate(new Vector3(0, -90, 0), Space.Self);
        if (Vector3.Distance(transform.position, target.position) > 1f)
        {
            transform.Translate(new Vector3(enemyspeed * Time.deltaTime, 0, 0));
        }

        if (collide == true)
        {
            // restart();
            SceneManager.LoadScene("Death", LoadSceneMode.Single);
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
    void restart()
    {
        //if (deadNumber == 1)
        //{
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
        //}
    }

}