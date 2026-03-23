import { useState, useEffect } from 'react';
import { Lock, Eye, EyeOff, UserCheck, AlertCircle, Loader, RefreshCw, AlertTriangle, Download } from 'lucide-react';

type Registration = {
  id: string;
  name: string;
  whatsapp: string;
  email: string;
  cpf: string;
  university: string;
  course: string;
  created_at: string;
};

const RegistrationList = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [wrongPasswordAttempt, setWrongPasswordAttempt] = useState(false);

  const correctPassword = 'melancia';
  const apiUrl = import.meta.env.VITE_SUPABASE_URL 
    ? `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/get-registrations` 
    : 'https://qcfgpelgwlwgapixzowj.supabase.co/functions/v1/get-registrations';

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      fetchRegistrations();
    } else {
      setWrongPasswordAttempt(true);
      setTimeout(() => setWrongPasswordAttempt(false), 2000);
    }
  };

  const fetchRegistrations = async () => {
    setLoading(true);
    setError(null);
    setDebugInfo(null);
    
    try {
      console.log('Fetching registrations from edge function...');
      
      // Fetch data from our edge function with the password
      const response = await fetch(`${apiUrl}?password=${encodeURIComponent(correctPassword)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include anon key for Supabase functions authentication
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY || ''}`
        }
      });
      
      // Log response status for debugging
      console.log('Edge function response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        setDebugInfo(`API response error (${response.status}): ${errorText}`);
        throw new Error(`API responded with status ${response.status}`);
      }
      
      const data = await response.json();
      console.log(`Fetched ${data.count} registrations via edge function`);
      
      if (!data.registrations || data.registrations.length === 0) {
        console.log('No registrations found or data is empty');
        setRegistrations([]);
        return;
      }
      
      setRegistrations(data.registrations);
    } catch (err) {
      console.error('Error fetching registrations:', err);
      const errorMessage = err instanceof Error 
        ? `Erro: ${err.message}` 
        : 'Ocorreu um erro desconhecido ao buscar as inscrições';
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const exportToCsv = () => {
    if (registrations.length === 0) return;
    
    // Create CSV content
    const headers = ['Nome', 'Email', 'WhatsApp', 'CPF', 'Universidade', 'Curso', 'Data de Inscrição'];
    
    const csvContent = [
      headers.join(','),
      ...registrations.map(reg => [
        `"${reg.name.replace(/"/g, '""')}"`,
        `"${reg.email.replace(/"/g, '""')}"`,
        `"${formatWhatsapp(reg.whatsapp)}"`,
        `"${reg.cpf}"`,
        `"${reg.university.replace(/"/g, '""')}"`,
        `"${reg.course.replace(/"/g, '""')}"`,
        `"${formatDate(reg.created_at)}"`
      ].join(','))
    ].join('\n');
    
    // Create blob and download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `inscritos_lapq_${formatDateForFilename(new Date())}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Format date to Brazilian format
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(date);
    } catch (e) {
      console.error('Error formatting date:', e);
      return dateString;
    }
  };

  // Format date for filename (YYYY-MM-DD)
  const formatDateForFilename = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  // Format WhatsApp number
  const formatWhatsapp = (whatsapp: string) => {
    if (!whatsapp) return '';
    
    // Remove non-numeric characters
    const numbers = whatsapp.replace(/\D/g, '');
    
    // Format as (XX) XXXXX-XXXX
    if (numbers.length === 11) {
      return `(${numbers.substring(0, 2)}) ${numbers.substring(2, 7)}-${numbers.substring(7)}`;
    }
    
    return whatsapp;
  };

  return (
    <div className="min-h-screen bg-light pt-32 pb-16 px-4">
      <div className="container-custom max-w-6xl mx-auto">
        {!isAuthenticated ? (
          <div className="bg-white p-8 rounded-xl shadow-md max-w-md mx-auto">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock size={28} className="text-primary" />
              </div>
              <h1 className="text-2xl font-heading font-bold text-dark">Área Restrita</h1>
              <p className="text-gray-600 mt-2">Insira a senha para acessar a lista de inscritos</p>
            </div>
            
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full p-3 pl-3 pr-10 border rounded-lg focus:ring-2 focus:outline-none ${
                    wrongPasswordAttempt 
                      ? 'border-red-500 focus:ring-red-200' 
                      : 'border-gray-300 focus:ring-primary/50'
                  }`}
                  placeholder="Digite a senha"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              
              {wrongPasswordAttempt && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertCircle size={14} className="mr-1" /> Senha incorreta
                </p>
              )}
              
              <button
                type="submit"
                className="w-full bg-primary text-white p-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Acessar
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 bg-primary text-white flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <h1 className="text-xl font-heading font-bold flex items-center">
                <UserCheck size={20} className="mr-2" /> Lista de Inscritos - Evento LAPQ
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-white/80 text-sm">
                  Total: {registrations.length} inscritos
                </span>
                <button 
                  onClick={exportToCsv}
                  disabled={loading || registrations.length === 0}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Exportar para CSV"
                >
                  <Download size={16} className="mr-2 text-white" /> 
                  Exportar CSV
                </button>
                <button 
                  onClick={fetchRegistrations}
                  disabled={loading}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  title="Atualizar lista"
                >
                  {loading ? 
                    <Loader size={16} className="animate-spin text-white" /> : 
                    <RefreshCw size={16} className="text-white" />
                  }
                </button>
              </div>
            </div>
            
            {loading ? (
              <div className="p-12 text-center">
                <Loader size={40} className="animate-spin text-primary mx-auto mb-4" />
                <p className="text-gray-600">Carregando inscrições...</p>
              </div>
            ) : error ? (
              <div className="p-8 text-center">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-lg mx-auto">
                  <AlertTriangle size={32} className="text-red-500 mx-auto mb-2" />
                  <p className="text-red-700 font-medium mb-1">Erro ao carregar inscrições</p>
                  <p className="text-red-600 text-sm mb-4">{error}</p>
                  {debugInfo && (
                    <div className="text-left bg-gray-100 p-3 rounded text-xs text-gray-700 font-mono mb-4 overflow-auto max-h-32">
                      <p>Informações de diagnóstico:</p>
                      <code>{debugInfo}</code>
                    </div>
                  )}
                  <button 
                    onClick={fetchRegistrations} 
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center mx-auto"
                  >
                    <RefreshCw size={16} className="mr-2" /> Tentar novamente
                  </button>
                </div>
              </div>
            ) : registrations.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-w-lg mx-auto">
                  <AlertCircle size={32} className="text-gray-400 mx-auto mb-2" />
                  <p className="font-medium mb-4">Nenhuma inscrição encontrada.</p>
                  <button 
                    onClick={fetchRegistrations} 
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center"
                  >
                    <RefreshCw size={16} className="mr-2" /> Atualizar
                  </button>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">WhatsApp</th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Universidade</th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Curso</th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Data de Inscrição</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {registrations.map((reg) => (
                      <tr key={reg.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">{reg.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <a href={`mailto:${reg.email}`} className="text-primary hover:underline">
                            {reg.email}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <a href={`https://wa.me/55${reg.whatsapp.replace(/\D/g, '')}`} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-primary hover:underline">
                            {formatWhatsapp(reg.whatsapp)}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{reg.university}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{reg.course}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{formatDate(reg.created_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationList;