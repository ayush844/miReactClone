import React from 'react'
import '../Styles/Footer.css'



// --------------------------------ICONS--------------------------------
const facebookIcon = <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>

const instaIcon = <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"/><stop offset=".328" stop-color="#ff543f"/><stop offset=".348" stop-color="#fc5245"/><stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/><stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"/><stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>


const twitterIcon = <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"/></svg>

const youTubeIcon = <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" width="48px" height="48px"><path fill="#e85654" d="M87.574,32.465c-0.77-4.477-4.399-7.902-8.922-8.325C71.569,23.479,62.224,23,50,23	s-21.569,0.479-28.651,1.141c-4.523,0.422-8.153,3.848-8.922,8.325C11.59,37.333,11,43.181,11,50s0.59,12.667,1.426,17.535	c0.77,4.477,4.399,7.902,8.922,8.325C28.431,76.521,37.776,77,50,77s21.569-0.479,28.651-1.141c4.523-0.422,8.153-3.848,8.922-8.325	C88.41,62.667,89,56.819,89,50S88.41,37.333,87.574,32.465z"/><path fill="#fefdef" d="M42.5,61.5l20-11.5l-20-11.5V61.5z"/><path fill="#1f212b" d="M50,78c-10.941,0-20.612-0.385-28.745-1.145c-4.931-0.46-8.967-4.223-9.814-9.15	C10.485,62.141,10,56.184,10,50s0.485-12.141,1.441-17.705c0.847-4.927,4.883-8.69,9.815-9.15C29.388,22.385,39.059,22,50,22	s20.612,0.385,28.745,1.145c4.931,0.46,8.967,4.224,9.814,9.15l0,0C89.515,37.856,90,43.813,90,50s-0.485,12.144-1.441,17.705	c-0.847,4.927-4.883,8.69-9.815,9.15C70.612,77.615,60.941,78,50,78z M50,24c-10.879,0-20.488,0.382-28.559,1.136	c-4.033,0.377-7.335,3.46-8.03,7.498C12.475,38.086,12,43.929,12,50s0.475,11.914,1.412,17.366c0.695,4.038,3.997,7.121,8.03,7.498	C29.512,75.618,39.121,76,50,76s20.488-0.382,28.559-1.136c4.034-0.377,7.335-3.46,8.03-7.498C87.525,61.917,88,56.074,88,50	s-0.475-11.917-1.412-17.366l0,0c-0.694-4.038-3.996-7.121-8.03-7.498C70.488,24.382,60.879,24,50,24z"/><path fill="#1f212b" d="M42.5,62c-0.086,0-0.173-0.022-0.25-0.067C42.095,61.843,42,61.679,42,61.5v-23	c0-0.179,0.095-0.343,0.25-0.433c0.155-0.089,0.345-0.09,0.5-0.001l20,11.5C62.904,49.656,63,49.821,63,50s-0.096,0.344-0.251,0.434	l-20,11.5C42.672,61.978,42.586,62,42.5,62z M43,39.364v21.271L61.497,50L43,39.364z"/><path fill="#1f212b" d="M22.5,29.058c-0.256,0-0.474-0.195-0.498-0.456c-0.024-0.275,0.178-0.518,0.454-0.542	C30.307,27.356,39.574,27,50,27c5.443,0,10.665,0.101,15.521,0.301c0.276,0.011,0.49,0.244,0.479,0.52	c-0.011,0.275-0.261,0.496-0.52,0.479C60.638,28.101,55.43,28,50,28c-10.396,0-19.634,0.355-27.456,1.056	C22.529,29.058,22.514,29.058,22.5,29.058z"/><path fill="#1f212b" d="M77.5,29.058c-0.015,0-0.03,0-0.045-0.002l-0.997-0.082c-0.275-0.023-0.479-0.265-0.456-0.54	c0.023-0.275,0.271-0.483,0.54-0.456l1.003,0.082c0.275,0.025,0.478,0.268,0.453,0.543C77.975,28.863,77.756,29.058,77.5,29.058z"/><path fill="#1f212b" d="M73.5,28.743c-0.012,0-0.024,0-0.036-0.001c-1.614-0.114-3.272-0.218-4.99-0.305	c-0.276-0.014-0.488-0.249-0.474-0.525c0.014-0.276,0.247-0.493,0.525-0.474c1.725,0.088,3.39,0.192,5.01,0.307	c0.276,0.02,0.483,0.258,0.463,0.534C73.98,28.542,73.761,28.743,73.5,28.743z"/></svg>




const Footer = () => {
  return (
    <div className='footer'>
        <div><h2>FOLLOW US ON</h2></div>
        <div className='socials'>
            <a className='socialLink' href="/App">{facebookIcon}</a>
            <a className='socialLink' href="/App">{instaIcon}</a>
            <a className='socialLink' href="/App">{twitterIcon}</a>
            <a className='socialLink' href="/App">{youTubeIcon}</a>
        </div>
    </div>
  )
}

export default Footer
