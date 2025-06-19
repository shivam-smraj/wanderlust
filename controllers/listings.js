const { model } = require("mongoose");
const Listing = require("../models/listing");

module.exports.index = async (req,res)=>{
    let query = {};
    
    if (req.query.q) {
        const searchQuery = req.query.q;
        const searchRegex = new RegExp(searchQuery, 'i');
        query = {
            $or: [
                { title: searchRegex },
                { location: searchRegex },
                { country: searchRegex },
                { description: searchRegex }
            ]
        };
    }
    
    const alllistings = await Listing.find(query);

    res.render("listings/index", {
        alllistings,
        searchQuery: req.query.q || ""
    });
};
module.exports.renderNew = async (req,res)=>{
    res.render("listings/new");
}

module.exports.listingCreated= async (req,res,next)=>{
    let url= req.file.path;
    let filename = req.file.filename;

    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id;
    newlisting.image = {url,filename};
    await newlisting.save();
    req.flash("success", "New Listing Created !")
    res.redirect("/listings")
}
const { getOptimizedImageUrl } = require("../cloudConfig");

module.exports.editRoute= async (req, res)=>{
    const {id}= req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing Not Found");
        return res.redirect("/listings");
    }
    let oldImage = getOptimizedImageUrl(listing.image.url, 'show');
    res.render("listings/edit", {listing, oldImage});
}
module.exports.listingUpdated= async(req,res)=>{
    let {id}= req.params;
    let listing =  await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file !== "undefined"){
        let url= req.file.path;
        let filename = req.file.filename;
        listing.image = {url,filename};
        await listing.save();
    }
    req.flash("success","Listing Updated")
    res.redirect(`/listings/${id}`);
    // console.log("donee");

}

//Delete rout 
module.exports.delete= async (req, res)=>{
    const {id}= req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    // console.log(deletedListing);
    req.flash("success","Listing deleted ")
    res.redirect("/listings")

}

//Show routes for each listings
module.exports.showEachListing =  async (req, res)=>{
    let {id}= req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");
        

    if(!listing){
        req.flash("error","Listing Not Found");
        return res.redirect("/listings");
    }
    console.log(listing)
    res.render("listings/show",{listing});
}
