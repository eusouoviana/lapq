import { ExternalLink, Mail, User } from 'lucide-react';

interface TeamMemberCardProps {
  nome: string;
  titulo: string;
  instituicao: string;
  email?: string;
  lattes?: string;
  fotoUrl?: string;
  tipo: 'coordenador' | 'membro';
}

/**
 * TeamMemberCard Component
 * Displays information about a team member or coordinator
 */
const TeamMemberCard = ({
  nome,
  titulo,
  instituicao,
  email,
  lattes,
  fotoUrl,
  tipo
}: TeamMemberCardProps) => {
  return (
    <div className={`p-6 rounded-xl border h-full transition-all duration-300 hover:shadow-lg ${
      tipo === 'coordenador'
        ? 'bg-primary/5 border-primary/20'
        : 'bg-white border-gray-100'
    }`}>
      <div className="flex items-center mb-4">
        {fotoUrl ? (
          <img
            src={fotoUrl}
            alt={nome}
            className="w-14 h-14 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mr-4">
            <User size={24} className="text-primary" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          {tipo === 'coordenador' && (
            <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded mb-1">
              Coordenador
            </span>
          )}
          <h3 className="font-heading font-bold text-dark truncate">{nome}</h3>
          <p className="text-sm text-gray-600 truncate">{titulo}</p>
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-4 line-clamp-2">{instituicao}</p>

      <div className="flex gap-2 flex-wrap">
        {email && (
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
            title={email}
          >
            <Mail size={16} className="mr-1" />
            Email
          </a>
        )}
        {lattes && (
          <a
            href={lattes}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
            title="Currículo Lattes"
          >
            <ExternalLink size={16} className="mr-1" />
            Lattes
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
