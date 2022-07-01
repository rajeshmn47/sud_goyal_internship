export const validate=(values,errors,setErrors)=>{
    let fieldValues=values
    console.log(fieldValues,'rajeshuyttrwe')
    let temp = { ...errors }
    if ('userId' in fieldValues)
        temp.fullName = fieldValues.userId ? "" : "This field is required."
    if ('title' in fieldValues)
        temp.title = (/$^|.+@.+..+/).test(fieldValues.title) ? "" : "Email is not valid."
    if ('body' in fieldValues)
        temp.body = fieldValues.body.length > 2? "" : "Minimum 10 numbers required."
    setErrors({
        ...temp
    })
    console.log(temp)
    if (fieldValues == values)
        return Object.values(temp).every(x => x == "")
}
