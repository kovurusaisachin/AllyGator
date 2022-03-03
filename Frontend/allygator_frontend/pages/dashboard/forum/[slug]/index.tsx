import Sidebar from "../../../../components/sidebar"
import { useRouter } from "next/router";
export default function forumPage () {
    const router = useRouter();
    const slug = router.query.id ?? "";
    return (
        <div className="flex flex-col-2">
        <Sidebar />
        <h2>More Content Coming Soon!!!</h2>
        
        
    </div>
    )
}