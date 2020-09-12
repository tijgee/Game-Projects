using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class walkTest : MonoBehaviour
{
    private Rigidbody2D rb;
    public float moveSpeed = 3f;
    public Vector2 jumpHeight;
    public float jumpForce;
    bool facingRight;
    public float extraJumps;
    public float jump = 1;
    private float moveInput;

    private bool isGrounded;
    public Transform groundCheck;
    public float checkRadius;
    public LayerMask whatIsGround;

    private bool isDead;
    public float deadNumber = 0;
    public Transform deadCheck;
    public LayerMask whatIsDead;

   // Animator anim;
   // int JumpLeft = Animator.StringToHash("spritesheet_6");

    // Use this for initialization
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
       // anim = GetComponent<Animator>();

    }

      void FixedUpdate()
      {

          isDead = Physics2D.OverlapCircle(deadCheck.position, checkRadius, whatIsDead);  

          //isGrounded = Physics2D.OverlapCircle(groundCheck.position, checkRadius, whatIsGround);
          moveInput = Input.GetAxis("Horizontal");
          rb.velocity = new Vector2(moveInput * moveSpeed, rb.velocity.y);

          if (facingRight == false && moveInput < 0 )
          {
              Flip();
          }
          else if (facingRight == true && moveInput > 0)
          {
              Flip();
          }
          
      }

      // Update is called once per frame

      
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            Application.Quit();
        }
        //Debug.Log(isGrounded);
        //makes user run
        // transform.Translate(Vector3.up * Time.deltaTime * Input.GetAxis("Vertical") * (moveSpeed+2));
        transform.Translate(Vector3.right * Time.deltaTime * Input.GetAxis("Horizontal") * moveSpeed);

        //makes user jump
        Rigidbody2D rb = GetComponent<Rigidbody2D>();
        /*
                if (Input.GetKeyDown(KeyCode.W) && jump > 0)
                {
                    rb.AddForce(Vector2.up * jumpForce);
                    //jump = jump - 1;
                }
        */
        if (isDead == true)
            deadNumber = 1;


           if (isGrounded == true)
           {
               extraJumps = 0;
           }

      //  if (Input.GetKeyDown(KeyCode.W) && isGrounded==true)
       /* {
            rb.velocity = Vector2.up * jumpForce;
            extraJumps--;
            
        }
        */
        //if (Input.GetKeyDown(KeyCode.W) && extraJumps > 0)
        //{
        //    rb.velocity = Vector2.up * jumpForce;
        //    extraJumps--;
        //}
        if (Input.GetKeyDown(KeyCode.W) && isGrounded == true)
        {
            rb.velocity = Vector2.up * jumpForce;

        }
        //animations
      /*  if (Input.GetKeyDown(KeyCode.W) && Input.GetKeyDown(KeyCode.D) && isGrounded == false)
        {

        }

        if (Input.GetKeyDown(KeyCode.W) && Input.GetKeyDown(KeyCode.A) && isGrounded == false)
        {
            anim.SetTrigger(JumpLeft);
        }*/

    }

    void OnCollisionEnter2D(Collision2D col)
    {
        Debug.Log("OnCollisionEnter2D");
        if (col.gameObject.CompareTag("ground"))
        {
            isGrounded = true;
        }
        else if (col.gameObject.CompareTag("Respawn"))
        {
            Debug.Log("hit death");
            // restart();
            SceneManager.LoadScene("Death", LoadSceneMode.Single);
        }
    }

    void OnCollisionExit2D(Collision2D col)
    {
        Debug.Log("OnCollisionEXIT2D");
        if (col.gameObject.CompareTag("ground"))
        {
            Debug.Log("left ground");
            isGrounded = false;
        }
    }

    void Flip()
          {
              facingRight = !facingRight;
              Vector3 Scaler = transform.localScale;
              Scaler.x *= -1;
              transform.localScale = Scaler;
          }
    void restart()
    {
        //if (deadNumber == 1)
        //{
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
        //}
    }
    //}
}