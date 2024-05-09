import config from "@/config"

export async function generateMetadata({ params }) {
    const id = params.id
   
    const result = await fetch(`${config}/api/service/${id}`)
    const service = await result.json()
    return {
      title: service.seoTitle,
      description: service.seoDescription,
      date:service.createdAt,
      author:"sumkesh jambharkar"
      
    }
  }
   

  
export default function Layout ({children}) {
  return <>{children}</>
}