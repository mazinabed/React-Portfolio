import Link from 'next/link';
export default function Index() {
    return(
<>
<head>
                  <meta charset="UTF-8"/>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                  <title>About me</title>
                  
                  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                  
                  </head>
<header>

                
<ul className="nav justify-content-end">
        <li className="nav-item">
                <Link href="/index">About Me</Link>
              </li>
        <li className="nav-item">
            <Link href="/contact">Contact</Link>
        </li>
        
        <li className="nav-item">
            <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
              
<h1 className="title">Mazin Abed</h1>


</header>



</>
    )
}