import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const userSessionExists = document.cookie.length > 0;
const noSession = document.cookie.length === 0;

export default class Navbar extends Component {
  render() {
    return (
        <div>
                <nav class='bar-box'>
                  <li class='logo-li'>
                    <div href='#'>
                    <img
                      src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEX///8aJjIQHypIUlrJzM4ABxwAFyUYJi/r7OsAGCWOk5cAFSKIkJYbJzP8/PwABBkSIC5GS1Hj5+gAABEbKDH///wAAA0ZIywACRkAAAAADxwAABgAEx4PHCYbKTVeY2jBxMYAECHz9PXT1dafpakLGyk0O0HEyMoADSG2ubt/hIdscHSusbMAAhw8RU25vb8qMjhXXWN8hY3g4N9oc3wsOEJwdnukqq82Q01MUlUjLzqLkpg5PD/t7OpnbHAgJisSHyMRHC0AFRtfYGDPDLKdAAAK6UlEQVR4nO2dDXeiOhPHIVVRKS9CNBQFBcSqtWrrVtvee929z/3+3+lJeEfs2naraM/8z9k9FhDzI5OZySS2HAcCgUAgEAgEAoFAIBAIBAKBQCAQCAS6dMmFH+X9F16qZE5uc5yrDRaTRUVz6QH5uyFynLbpo46pG4beee0PtbKb86WS221utR6PfZ7npeCf73RfBhzXLrtlXyWZW90ZDT4v1GlVvo+hNhs+xjuEgoCq029AKFOPUn9RVCkwz6zYz8aVe/ndKHMV4vNvSPJHl+5xaActTOFNQIkny3rZbfxT3Xb5goFm5Y9c+aINdWX+hi5Q7eGih6I8Vw8R8kaz7FZ+XjJ37RwE5InhtS/VUNuaYv92EIaEaH65dnrnqwcBeUL02aXmb1q3QIMxEShT/qg6ki+UcCju9CDGVrWBnJq9A25Mym7qJ/WCdpJRS3n0XG7VVGu5wxJ6Kbupn5NrCdk+xIJzF+Vo7g8TS1JyUqLutNymflKensvXhN4kLF2wf80xnxLyWLy+SHc6MXJG6lSCmUZUwGjep4QCIcuLJBz20kkhweYwDzHtZf3NWLtEbzrsCYmZEoLc/Fl5hLIdfJHedNhIPQ22rnZPV4wMYe0ik9ONmY5DQX3YOSvTjAcnod/f7rtDLhGQ2+1zs+SFQRJErLZ2zsqcJqbJDRrtT9y0ybTfGs3705l3hq5opad9iNXlzjikiD+s9ILenhvIsyvRsBDiEWo4ytN0dYpWp5/OLEibTbdX89bDujnYbT+VS7I5zb1W6KWKnpy1O/kbsLAyexpnKzyq1VnXTxpU3M284zQaCCFVrTmd51nhwx9QYoUSX90zgUgzcKmzW5LSXu5VPpfAYiyOZ0fDKcht+gaSMMaSTT8aCxiNXyc7yy0bJ9NC/65IuE7LxMoO4cxHQiaxYyIEk+7jaTpRlutXBtmd+qn3/Xputq7puQa6BcKZk5zN9CFbl7qrvlH+qK5PUw9wR1ahiM3mCL0BlzagTc00c9YsWtiquo+QPpp5T3hj6iwZ01MAci3E7yGkw0ZvcsmyWZsb6Jl2onnhNnI6i9IznsYjKr/n7tFndI4+Fmkn/WWQNz5fqq6TXqSof5NM0O96O+NU5kaxLUqGnNy9cqD2UfunfVxDlVmge/MR496PZNVM5ia5kNgv3OsuCQevyWPxTPLm3dmzkI6e4bW5vsWSEQmHH5h/3lhytvSSaJbEXaUjEfOKt+tOm7GZ+klS51EnKoSIUvyflJlMSrz6uif4fqk8g1DHLQlBQ/b4G/NOTlyql02v/X6eUKbxJGp6bRod0ZZW+sgk3kamYioGsjNrA5Jye2TCtU8s03AQEVBNcfyCWxfMZCzK3LWYOWNUcjeiVjyOCJ1hdKiVzYMk37marTRtsXWyQ7N3ZDOt3+jL9aaiuVSaN3t81UWSs1VsU3cTdhbtyyeUniq400o16ppqsB7c5h4daudxByL9Ia7frOaZwIP2TkS+TlpzJ/3wmiMF5X2Ps41ihsxsOrUvY5Z3p944GmdiuD1j0kmyIEyMVqbL3VEym5ZQYa751colLuy1fPuSX2PC4oMbIw7TU1jg84u+q3HoTdQ5xyKAlk4Y+QaZ5TakrJNOtI9OWAhGzCI3lp9JQrFdm9fDkpPMbZ3YS2DbmeberjlRF14Hj2rbiC3Bvu+7XC7s4bRwh4ph5xSqPxjZmYBtjbSwf2V5nvEeSq4yWm+Esc8YBCmQEo9A1dhknwR9WVFSwmN7mjfV1DNuVcJoGcxY2VaFn6m3Qc/Zjqn7zCyJ7Qdr3SR6v+S/ermupq+3fvKUbCXvkk8m2gc84pN8RJLU11UUNVa2KkVdgJ1mJjmvI3Y9q+rTQ00x6D/MN15cLjeDaHPefSbyFsoFp5M2FzM+1UY/Q0OlDWzE5JjomWIE7UN2vMGo3V+Czaa5xNzujvQ2d5UxD7Q+KVRWlGZqpNUlSUBYi457vcgVEoxamT4MyQ1mlFORRUIaJKZcYQp4nU2NdK+8mhsrrlgoSbBsHj2ton2Jnq3aOLDCJH+h0gJC1KIX1dmTwVgwd+d/9KYbI3UzmMaKI88tDihnqTZahsUjivjUiJpp9xI/ojXYtQ4r+DfN/YD01ExPZxsS6ZTkZ+Lm0KZPldSiBLQMVySoR23V4mPP8eWayNquazSHsFj/COK6GG6bFDA1fatf8iIOC/ETC8WhkYa2pRaPq61jB6ZoO/FimuZgLKlXYeZD50iNfv5e7Tbn9g2Jj40UE4LOYA2HTpHnYhr9EUPkgu69jmsDemRpmkmjSFAiXAp0quS38jUAOn4nP2vZpB6fxa4Glqyt9bRR6DXyqHREdUOvLzyFIW1l0GTMouH+VsE00D9p7XwYXPV1IZMpScR8LDra0yvYpT4xkERC5ympxIvb5T3RkUePO+F4W43pvJhNtfosq7UykZKtwmjTGzWzH4eGysaR500fkjbq4ThbRr8GsXtw1+PAb1Rn7AgltGkwbGvjjOlyYXK/mopWruCFsbE9o6VimXOnySo3FoxhdJRVwi1qkXyPma53L7FgGNRr7nNVwsrWbJBcSUoixqN8BiaaFbPUoLIrSURfu/G8azU3qXdELyzVUXg6i2i7r3xYaY3kbuY64nPbNjGd8W9KI3lT2pWepKO911suGo1y00C8TZFYAaBHDw2MINKHhO6i7zjq7n44OuP3zshEQzGf2nTUJJAZ23BuSNvpzR3M6lIVpcdCY9+Py3Du4A4rll3YFu7ww3P9Coo3rwpsBYC12Tf6t0ENpE3R7xF6civVDg0Q9Q5qsejhTrak6weXxoDUf9oCGdcez3WzNLPKoZokqtjSl8NVeHz10BX7tzpbc9tU/3a51abf0a3CagEmte7zsLwJ4SEFvs+9dsS4R7Aq9ubN26BHJk83z3Qm1OZehMVwbvYsenp316KpP02ZbZc7mzgsbfrTFDDbesk6E9Wqv1rTAY0ns+UD7ULtRvJFVsoPxV4INkKiaeKH5jluUNgrd/aiG41kjqD+e3/DfL/MUtbFy+h/elfpVpkU+kLRO6S1bi5Wl0IXb2tYTK+Qcl+tjqtd/fmRJXKBwitczfMqgTxvFQ+7tnxuIf6g5Lo3WCwG3vl6DtA3VlDdrn9E/2jJuvaH3ld3uVK+nkE9wnAk1g6pkb5yomKNzFVuDr4vewu+X0qCKnP/6cgWPqB0AanS/cj7sICMxekBOe668N2KA8oQVg9fnRMxS/jWoqz/bv/EFxPaZSw+eZ3TEUo8+e/0IzG7vHdsQpr07W7HPQnhCa0UCIEQCIEQCIEQCIEQCIEQCIEQCIEQCIEQCIEQCIHwrAm/fUW4+t370Dutlb6cft3C7Z7SSmun+cZ6Xv1G9MXgYxNiImC9jF+cpS0bwltfYf9aQkz06xIAZU7rG+hw+/6YUMIGGf6uJceU9uPNX6f7dYS8uChtl5TM/VU73MA/JmyU+ZuHr09BKAIhEAIhEAIhEAIhEAIhEAIhEAIhEAIhEAIhEAIhEAIhEAIhEAIhEAIhEAIhEAIhEAIhEAIhEAIhEAIhEAIhEJ4HoXwawjJ+z1dCeJJd0KX24dCx3/+Vi08RSryK3RJ3smumcGRC2oV7/jzE6Qi5Zuf9Tf0cocr/U+6fRhg6Zq/xLtWc6PtnMnd78753iKLozE/7N4ELooY6a75Xw9jaVtfvfs+g/D9c/Ykx8pG3XNgvFQaBQCAQCAQCgUAgEAgEAoFAIBAIBAKBLlr/B25nDXoJ6sk9AAAAAElFTkSuQmCC'
                      alt=''
                      width='60'
                      height='50'
                    />
                    </div>
                  </li>
                  <li class='li-box'>
                    <Link class='' to='/' >
                      ONLY GIFTS
                    </Link>
                  </li>
                  <li class='li-box'>
                    <Link class='' to='/user/:username'>
                      Public Profile
                    </Link>
                  </li>
                  {noSession && (
                    <div className='collpase navbar-collapse'>
                      <li class='li-box'>
                        <Link to='/register' class='li-box'>
                          Register
                        </Link>
                      </li>
                      <li class='li-box'>
                        <Link to='/login' class='li-box'>
                          Log In
                        </Link>
                      </li>
                    </div>
                  )}
                  {userSessionExists && (
                    <div className='collpase navbar-collapse'>
                      <li class='li-box'>
                        <Link to='/login' class='li-box'>
                          Log Out
                        </Link>
                      </li>
                    </div>
                  )}
                </nav>
                <br />
              </div>
            );
          }
        }