import mongoose from "mongoose";

const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

const QRSchema = new mongoose.Schema({
    qr_link:{
        type: String,
        trim: true
    },
    original_link: {
        type: String,
        required: [true, 'QR link is required'],
        validate: {
            validator: value => urlRegex.test(value),
            message: props => `${props.value} is not a valid URL link`
        },
        trim: true
    },

    name: {
        type: String,
        required: [true, 'Please name your QR code'],
        maxLength: [25, 'Name must be less than 20 characters'],
        trim: true
    },

    created_date: {
        type: Date,
        default: Date.now
    }
});

export const QRModel = mongoose.model('QR', QRSchema);
