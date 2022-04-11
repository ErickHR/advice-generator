
const cardWrapperImgIconDice = document.querySelector( '.card__wrapper-img--icon-dice' )
const cardTextHead = document.querySelector( '.card__text--head' )
const cardTextBody = document.querySelector( '.card__text--body' )
let isConsultAPI = false

const axiosInstance = axios.create({
    baseURL : 'https://api.adviceslip.com/advice'
})

const getApiAdice = async ( tag ) => {

    if( isConsultAPI ) return

    try {
        isConsultAPI = true
        const response = await axiosInstance.get()
        const { slip : { id, advice } } = response.data
        cardTextHead.textContent = `ADVICE #${id}` 
        cardTextBody.textContent = advice
    } catch (error) {
        console.log( error )
    } finally {
        isConsultAPI = false
    }

}

cardWrapperImgIconDice.addEventListener( 'click', async function () {
    try {
        this.classList.toggle( 'active' )
        await getApiAdice()
    } catch (error) {
        
    }finally {
        this.classList.toggle( 'active' )
    }

} )


getApiAdice()