// upload to dropbox
function doDropbox( objForm ) {

    // No real reason for this, could just include token in buyer.pug form
    // $.ajax({
    //     type: "GET",
    //     url: '/token',
    //     success: function (data) {
    //         dbxToken = data.trim();
    //     }, 
    //     async: false // <- this turns it into synchronous
    // });

    var dbxToken = $(objForm.token).val().trim(); // drobbox API Token
    var dbxFolder = $(objForm.folder).val().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').trim(); // zip + address cleanup
    var dbxFile = $(objForm.file)[0].files[0];
    var dbxFilename = $(objForm.filename).val().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').trim();
    
    var dbxAPI = new Dropbox.Dropbox({ accessToken: dbxToken });

    // console.log(dbxFolder);
    // console.log(dbxFile);

    // Do not use this to upload a file larger than 150 MB
    // https://dropbox.github.io/dropbox-sdk-js/Dropbox.html#filesUpload -- , mode: 'add', autorename: true
    dbxAPI.filesUpload({ path: '/otterdocs/'+dbxFolder+'/'+dbxFilename+'_'+dbxFile.name, contents: dbxFile, mute: true }).then(function (response) {
        console.log('Successfully uploaded!');
    }).catch(function (error) {
        console.log('Upload failed!');
        console.error(error);
    });
}
