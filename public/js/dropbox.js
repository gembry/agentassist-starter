// upload to dropbox
function doDropbox( objForm ) {

    // No real reason for this, could just include token in buyer.pug form
    // $.ajax({
    //     type: "GET",
    //     url: '/token',
    //     success: function (data) {
    //         dropboxToken = data.trim();
    //     }, 
    //     async: false // <- this turns it into synchronous
    // });

    var dropboxToken = $(objForm.token).val().trim();
    var dropboxFolder = $(objForm.folder).val().trim();
    var dropboxFile = $(objForm.file)[0].files[0];
    var dbxAPI = new Dropbox.Dropbox({ accessToken: dropboxToken });

    console.log(dropboxFolder);
    console.log(dropboxFile);

    // Do not use this to upload a file larger than 150 MB
    // https://dropbox.github.io/dropbox-sdk-js/Dropbox.html#filesUpload -- , mode: 'add', autorename: true
    dbxAPI.filesUpload({ path: '/otterdocs/'+dropboxFolder+'/'+dropboxFile.name, contents: dropboxFile, mute: true }).then(function (response) {
        console.log('Successfully uploaded!');
    }).catch(function (error) {
        console.log('Upload failed!');
        console.error(error);
    });
}
