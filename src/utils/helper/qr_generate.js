import QRCode from 'qrcode'

export const QRGenerator = async (link) => {

    console.log(link);
    try {

          return await QRCode.toDataURL(link)
     

    } catch (error) {
        throw new Error(error.message)
    }

}