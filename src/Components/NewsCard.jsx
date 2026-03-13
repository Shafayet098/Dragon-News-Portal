
import { format } from "date-fns";
import {
    FaRegBookmark,
    FaShareAlt,
    FaEye,
    FaStar,
    FaRegStar,
} from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ singleNews }) => {
    const {
        id,
        title,
        thumbnail_url,
        details,
        tags,
        total_view,
        rating,
        author,
    } = singleNews;
    return (
        <div className="card bg-base-100 shadow-md">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-base-200">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="font-semibold text-sm">{author.name}</h4>
                        <p className="text-xs text-gray-500">
                            {format(new Date(author.published_date), "yyyy-MM-dd")}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 text-gray-500 text-lg">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>

            {/* Body */}
            <div className="card-body p-4 border-b-2 border-slate-100 mb-4">
                <h2 className="card-title leading-snug">{title}</h2>

                <img
                    src={thumbnail_url}
                    alt={title}
                    className="w-full h-56 object-cover rounded-lg"
                />

                {/* Meta */}
                <p className="text-sm text-gray-500 mt-2">
                    {format(
                        new Date(author.published_date),
                        "EEEE, MMMM dd, yyyy"
                    )}{" "}
                    | Tags: {tags.join(", ")}
                </p>

                {/* Description */}
                <p className="text-sm mt-2 text-gray-700">
                    {
                        details.slice(0, 180) + "..."
                    }
                    <Link to={`/newsdetails/${id}`} className="font-bold text-sm text-secondary">See More</Link>
                </p>
            </div>


            {/* Footer */}
            <div className="flex items-center justify-between px-4 pb-4 text-sm">
                <div className="flex items-center gap-2 text-orange-500">
                    {/* rating */}
                    <div className="flex items-center gap-2">
                        {/* Stars */}
                        <div className="flex text-orange-500">
                            {[...Array(5)].map((_, i) =>
                                i < rating.number ? (
                                    <FaStar key={i} />
                                ) : (
                                    <FaRegStar key={i} />
                                )
                            )}
                        </div>
                    </div>
                    <span className="text-gray-800 font-medium">
                        {rating.number}
                    </span>
                    {rating.badge === "trending" && (
                        <span className="badge badge-error badge-sm ml-2">
                            Trending
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;