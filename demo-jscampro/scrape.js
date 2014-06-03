var Assetgraph = require('assetgraph-builder');
var query = Assetgraph.query;

var ag = new Assetgraph({
    root: 'http://www.jscamp.ro'
});

['addAsset', 'addRelation'].forEach(function (event) {
    ag.on(event, function (subject) {
        console.error(subject.toString());
    });
});

['error'].forEach(function (event) {
    ag.on(event, function (e) {
        console.error(e.message, e.stacktrace);
    });
});

ag
    .loadAssets('/')
    .populate({
        followRelations: query.or({
            hrefType: ['relative', 'rootRelative']
        },
        {
            href: function (href) {
                return href.indexOf('//www.jscamp.ro/') !== -1;
            }
        })
    })
    .queue(function (assetGraph) {
        assetGraph.findRelations().forEach(function (relation) {
            relation.hrefType = 'relative';
        });

        // Fix missing file names for index html-files
        assetGraph.findAssets({
            type: 'Html',
            isLoaded: true,
            isInline: false
        }).forEach(function (asset) {
            if (!asset.fileName) {
                asset.fileName = 'index.html';
            }
        });

        // Fix missing names for RSS feeds
        assetGraph.findAssets({
            type: 'Rss',
            isLoaded: true,
            isInline: false
        }).forEach(function (asset) {
            if (!asset.fileName) {
                asset.url = asset.url.replace(/\/$/, '.xml');
            }
        });
    })

    .writeAssetsToDisc({ isLoaded: true }, 'src')
    .run();
