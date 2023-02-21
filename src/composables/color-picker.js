import {ref} from "vue"


export const useColorPickerGame = (colorsArr) => {
    const colors = colorsArr
    let message = ref("Pick a color....")

    const matchColor = (value) => {
        const randomNumber = Math.floor(Math.random * 3 ) + 1

        if (colors[randomNumber] === value) {
            message.value = `you win... [answer: ${colorsArr[randomNumber]}]`
        }

        message.value = `You loose... [answer: ${colorsArr[randomNumber]}]`

        return {colors, message, matchColor}
    }
}