export default{
    name: 'picture',
    type: 'object',
    title: 'Image',
    fields: [
        {name: 'image', type: 'image', title: 'Image'},
        {name: 'alt', type: 'string', title: 'Alternative text'},
        {name: 'caption', type: 'string', title: 'Caption'},
    ]
}