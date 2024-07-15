// Ejercicio

const stringArray = ['Alemania', 'España', 'Holanda', 'Francia', 'Inglaterra,', 'Holanda']

const target = 'Holanda'

function findStringIndicesArray(array, target) {
    const result = {
        includesTargetString: false,
        firstOccurenceIndex: -1,
        lastOcurrenceIndex: -1
    }

    array.forEach((element, index) => {
        if (element.includes(target)) {
            result.includesTargetString = true
            result.firstOccurenceIndex = array.indexOf(target)
            result.lastOcurrenceIndex = array.lastIndexOf(target)
        }
    })
    return result
}


const result = findStringIndicesArray(stringArray, target)
console.log(result)