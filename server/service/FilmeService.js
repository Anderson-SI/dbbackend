const FilmeDate = require('../data/FilmeData');

exports.getFilmes = function (){
    return FilmeDate.getFilmes();
}

exports.getFilme = async function ( id ) {
    const filme = await FilmeDate.getFilme( id );
    if (!filme) throw new Error('Não existe filme com esse id:');
    return filme;
}

exports.saveFilme = async function (filme) {
    const rt = await FilmeDate.createTitulo(filme.titulo, filme.sinopse, filme.ano);
    const rv = await FilmeDate.createVideo(filme.duracao, filme.caminhodoarquivo);
    const fil = await FilmeDate.createFilme(filme.datalancamento, rt.idtitulo, rv.idvideo);
    return fil;
} 

exports.updateFilme = async function (id, filme) {
    await exports.getFilme(id);
    const upTitulo = await FilmeDate.updateTitulo(id, filme.titulo, filme.sinopse, filme.ano);
    const upVideo = await FilmeDate.updateVideo(id, filme.duracao, filme.caminhodoarquivo);
    return 'ok';
}

exports.deleteFilme = async function (id) {
    const f = await FilmeDate.deleteFilme(id); 
}
