import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    if (params.id === 'energy-development') {
        return {
            title: 'Solar Project Development, Engineering & Consultancy Services | TechX Pakistan',
            description: 'TechX offers end-to-end solar project development; feasibility studies, energy analysis, site surveys, grid compliance, O&M, and BESS consulting for utility-scale solar in Pakistan.'
        };
    }
    
    // Default fallback for other services
    return {
        title: 'Specialized Energy Services | TechX Pakistan',
        description: 'TechX provides comprehensive renewable energy solutions, fuel trading, and infrastructure services in Pakistan.'
    };
}

export default function ServiceDetailLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
