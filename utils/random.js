/**
 * 
 * @param {string[]} args 
 * @param {number} argAmount 
 * @param {import("../langs/langs").Txt} text 
 * @returns 
 */
function validArgAmount(args, argAmount, text) {
    if(!args) return text.get("global", "error");
    if(args.length == argAmount) return 1;
    else if(args.length > argAmount) {
        return text.get("global", "tooManyArgs").replace("%REQUIRED_AMOUNT%", argAmount).replace("%RECEIVED_AMOUNT%", args.length);
    }
    else if(args.length < argAmount) {
        return text.get("global", "notEnoughArgs").replace("%REQUIRED_AMOUNT%", argAmount).replace("%RECEIVED_AMOUNT%", args.length);
    };
}

module.exports = { validArgAmount }